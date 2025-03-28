import { Form } from "react-router";
import House from "~/components/House";

interface ActionDataType {
  success: string;
  error: string;
}

interface WelcomeProps {
    actionData: ActionDataType | undefined;
}

export function Welcome(props: WelcomeProps) {
  const {actionData} = props ;

  return (
    <main className="flex flex-col items-center justify-between p-8 min-h-screen">
      {/* header */}
      <section>
        <nav className="flex items-center justify-between">
          <div>
            <House />
          </div>
        </nav>
      </section>
      {/* core */}
      <section>
        <div className="flex flex-col items-center justify-around h-3/4 gap-8">
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-orange-400 bg-clip-text text-transparent">
            Coming Soon
          </h1>
          <p className="text-center md:text-start">
            We&apos;re currently building tools that will shape the future of real estate development.
          </p>
          <Form method="post" action="/?index" className="gap-4">
            <div className="my-2">
              {actionData?.error && (
                    <div className="bg-red-400 p-2 md:p-4 rounded-md">
                      <p className={"text-black"}>{actionData.error}</p>
                    </div>
                )}

                {actionData?.success && (
                    <div className="bg-green-400 p-2 md:p-4 rounded-md">
                      <p className={"text-black"}>{actionData.success}</p>
                    </div>
                )}
            </div>
            <div className="bg-gray-500 flex p-1 md:p-2 rounded-md gap-2">
              <input type="email" placeholder="Please enter your email address" className="p-2 md:p-4 bg-gray-500 text-white" id="email" name="email" />
              <button type="submit" className="bg-white text-black p-2 md:p-4 rounded-md text-sm md:text-base font-semibold">Notify Me</button>
            </div>
            <p className="font-thin italic text-center text-sm md:text-base mt-2">Notify me when the platform launches 🚀</p>
          </Form>
        </div>
      </section>
      {/* footer */}
      <section  className="w-full">
        <footer>
          <div className="flex items-center justify-between font-thin">
            <div>
              <a href="#" className="float-start">Privacy Policy</a>
            </div>
            <div className="">
              <span>
                <a href="#">Facebook</a>{' '}|{' '}
                <a href="#">Twitter</a>
              </span>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
