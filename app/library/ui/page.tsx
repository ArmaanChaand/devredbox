export default function UIPage() {
  return (
    <div className="w-full flex justify-start items-start gap-10">
      <section className="h-[300vh] bg-primary/20 w-full">

      </section>
      <div
        className="w-52 shrink-0 bg-amber-300 h-screen sticky top-20 hidden xl:block"
        // Should scroll when the content of the section is being scrolled.
      >

      </div>
    </div>
  )
}