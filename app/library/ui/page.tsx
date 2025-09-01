import Link from "next/link";

export default function UIPage() {


  return (
    <div className="w-full flex justify-start items-start gap-10">
      <div className="w-full min-h-screen">
        {/* Page contents inside this div */}
        <section className=" ">
          <h1 className="text-2xl font-extrabold">Find re-usable UI Components and Blocks</h1>
          <p></p>

        </section>
      </div>
      <div className="w-60 shrink-0 sticky top-20 hidden xl:block h-fit">

        <div className="text-sm text-muted-foreground flex flex-col justify-start items-start gap-2">
          <p>On this page</p>
          <Link href={"#"} className="toc-link" data-onpage={false} >Use Cases</Link>
          <Link href={"#"} className="toc-link" data-onpage={false} >List of Components</Link>
          <Link href={"#"} className="toc-link" data-onpage={true} >Credits</Link>
        </div>

      </div>
    </div>
  )
}