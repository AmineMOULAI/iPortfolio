import PageLayout from "@/components/newspaper/PageLayout";
import PageLink from "@/components/newspaper/PageLink";

export default function NotFound() {
  return (
    <PageLayout pageNumber={404} sectionName="Errors">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="font-display text-6xl font-black mb-4 uppercase">404</h1>
        <p className="font-body text-xl text-muted-foreground italic mb-8 border-b border-border-light pb-4 px-8">
          The requested edition could not be found in our archives.
        </p>
        <PageLink href="/" className="border-2 border-foreground px-8 py-3 font-display uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors">
          Return to Front Page
        </PageLink>
      </div>
    </PageLayout>
  );
}
