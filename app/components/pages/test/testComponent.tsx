import { cn } from "@/app/lib/utils";

const TestComponent = ({primary}:{primary: boolean})=>{
        return (<>
    {/* <div className={clsx("w-screen h-screen bg-white text-red-500 flex items-center justify-center","text-green-500")}> */}
    <div className={cn("text-4xl flex items-center justify-center", "bg-white text-red-500","w-screen h-screen",{"text-green-400":primary})}>
        
        Hello All How are you today
        
    </div>
    </>)
}

export default TestComponent;