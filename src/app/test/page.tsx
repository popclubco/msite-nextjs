import Link from "next/link"

function Test() {
    return (
        <>
            <h1>Test page</h1>
            <Link href="/login">
                <div>goto login</div>
            </Link>
        </>
    )
}

export default Test