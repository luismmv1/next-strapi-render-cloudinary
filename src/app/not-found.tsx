import Link from "next/link";

export const metadata = {
  title: 'Not Found - Welcome to CyberSecurity',
  description: 'Not Found - CyberSecurity',
  image: '/og-image.png',
  url: 'https://cybersec.com/',
}

const NotFound = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="min-h-screen flex flex-col justify-center items-center">
                <section className="text-center relative">
                    <h1 className='text-5xl'>
                        404 | Not Found | TITULO AQUI
                    </h1>
                    <h2>Url No valida o Dirección no encontrada</h2>
                    <div className="flex justify-center items-center mt-6 before:absolute before:h-[300px] before:w-[480px] before:translate-x-[-50%] before:rounded-full before:bg-gradient-radial before:from-orange-400 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-[33%] after:bg-gradient-conic after:from-red-500 after:via-orange-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-[#ff4500] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
                    <Link
                        href="/"
                    >
                        Volver al Inicio
                    </Link>
                </section>
            </div>
        </main>

    );
};

export default NotFound;