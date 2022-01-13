import Head from "next/head";

export default function SkySpace({ children }) {
    return (
        <>
            <div className="skyspace">
                {children}
            </div>

        </>
    )
}