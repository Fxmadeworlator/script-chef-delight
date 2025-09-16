import { ProgramsGrid } from "@/components/ProgramsGrid";

export const ProgramsPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            All Programs
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse our complete lineup of faith-building programs
          </p>
        </div>
        <ProgramsGrid />
      </div>
    </div>
  );
};