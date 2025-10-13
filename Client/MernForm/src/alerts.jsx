import { CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
export function SuccessAlert() {
   return<>
             <Alert>
               <CheckCircle2 />
               <AlertTitle>Hyy User !</AlertTitle>
               <AlertDescription>
                 you account has create enjoy our service.
               </AlertDescription>
             </Alert>
   </> 
}
export function FailAlert() {
    return<>
    <Alert variant={"destructive"} className={" "}>
            <CheckCircle2 />
            <AlertTitle>Hyy User !</AlertTitle>
            <AlertDescription>
              Something went wrong or already exisist Please try again.
            </AlertDescription>
          </Alert>
    </>
}