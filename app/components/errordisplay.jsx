import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      {/* <ExclamationTriangleIcon className="h-4 w-4" /> */}
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        <span></span> Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  );
}
