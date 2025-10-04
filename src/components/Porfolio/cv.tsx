import { Icon } from "@iconify/react";
import { Button } from "../ui/button";

export const CVDownload = () => {
  return (
    <div className="mt-10 flex gap-4">
      <Button variant="link" size="lg" onClick={() => {
        window.open("https://drive.google.com/file/d/15qaUgQigzNs5ph8dkH8s8vFJXDCdABcz/view", "_blank");
      }}>
        <Icon icon="radix-icons:download"/>
        View My CV
      </Button>
      <Button variant="default" size="lg" className="rounded-full bg-red-500 hover:bg-red-500/70 transition-all duration-50" onClick={() => {
        window.open("mailto:vhuy257@gmail.com", "_blank");
      }}>
        Contact Me
        <Icon icon="mynaui:send" width="24" height="24" />
      </Button>
    </div>
  );
};
