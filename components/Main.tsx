import { Button } from "@/components/ui/button";

type MainProps = {
  title: string;
  tiles?: React.ReactNode;
};

function Main({ title, tiles }: MainProps) {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      </div>
      <div className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm">
        {tiles ? (
          tiles
        ) : (
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no tiles
            </h3>
            <p className="text-sm text-muted-foreground">
              You can tiles to customize your dashboard.
            </p>
            <Button className="mt-4">Add Tile</Button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
