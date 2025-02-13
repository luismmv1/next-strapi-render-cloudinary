"use client";

import { Table } from "flowbite-react";
import { useContext } from "react";

import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { cartContext } from "../context/CartContext";
import { formatPrice } from "../helpers/format-price";

const Cart = () => {
  const {
    cartProducts,
    increaseQuantity,
    decreaseQuantity,
    totalQuantityProduct,
    totalPriceProduct,
  } = useContext(cartContext);

  return (
    <div className="space-y-8">
      <div className="container mx-auto max-w-3xl">
        <PageHeader text="Book Cart" />
        {/* <pre>{JSON.stringify(cartProducts, null, 2)}</pre> */}
        <Table>
          <Table.Head>
            <Table.HeadCell>
              {totalQuantityProduct !== 0 ? "Product name" : "Cart is empty"}
            </Table.HeadCell>
            <Table.HeadCell className="text-right"></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cartProducts.map((product) => (
              <Table.Row key={product.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.title}
                </Table.Cell>
                <Table.Cell className="">
                  <div className="flex justify-end items-center space-x-3">
                    <button
                      className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div>
                      <span className="bg-gray-50 w-10 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {product.quantity}
                      </span>
                    </div>
                    <button
                      className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
            {/* // footer */}
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-extrabold">
              <Table.Cell className="whitespace-nowrap font-extrabold text-gray-900 dark:text-white ">
                Total
              </Table.Cell>
              <Table.Cell className="text-right">
                <span className="text-gray-900 dark:text-white">
                  ${formatPrice(totalPriceProduct)}
                </span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Link
          href="/store"
          className="mt-5 mb-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg>
          Seguir Comprando
        </Link>
      </div>
      
    </div>
  );
};
export default Cart;