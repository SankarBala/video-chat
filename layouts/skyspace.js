import Head from "next/head";

export default function SkySpace({ children }) {
    return (
        <>
            <div class="skyspace">
                {children}
            </div>

        </>
    )
}