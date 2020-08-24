import Link from "next/link";
import Head from "next/head";

export default function FirstPost () {
    return( 
    <div>
        <Head>
            <title> First Page</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1> First Post</h1>
        <h2>
            <Link href="/">
                <a>
                    Home
                </a>
            </Link>
        </h2>
    </div>
    )

}

