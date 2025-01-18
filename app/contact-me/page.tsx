import React from "react";
import { IoIosMail } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-5xl font-bold">Want to work Together!</h2>

        <div className="text-xl flex items-center justify-center space-x-2">
          <p className="flex items-center justify-center space-x-2">
            <IoIosMail /> <span>Email :</span>
          </p>
          <a
            className="hover:text-orange-600 transition-all duration-200 ease-in-out"
            href="mailto:rishabpal2000@gmail.com"
          >
            rishabpal2000@gmail.com
          </a>
        </div>
      </div>

      <form
        className="flex flex-col items-center justify-center gap-8"
        action="https://formsubmit.co/3d5507fa1e90b429af4f014f15ea2445"
        method="POST"
      >
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex flex-col space-y-4 w-96">
            <Input
              type="text"
              name="name"
              className="px-4 py-2"
              placeholder="Your Name..."
            />
            <Input
              type="text"
              name="email"
              className="px-4 py-2"
              placeholder="Your Email..."
            />
            <Input
              type="text"
              name="phone"
              className="px-4 py-2"
              placeholder="Your Phone..."
            />
          </div>
          <div className="w-96">
            <Textarea
              name="message"
              cols={40}
              rows={6}
              placeholder="Your Message..."
            />
          </div>
        </div>

        <Button className="px-8 bg-orange-600 hover:bg-orange-700 dark:bg-white dark:text-black">
          Submit
        </Button>
      </form>
    </main>
  );
}
