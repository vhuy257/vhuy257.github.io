import { Link } from "lucide-react";
import { Button } from "../ui/button";

export const CVDownload = () => {
  return (
    <div className="download-cv">
      <Button
        variant={"outline"}
        size={"lg"}
        className="button--winona relative"
        data-text="Download CV"
        asChild
      >
        <Link href="https://drive.google.com/file/d/1VGoZJl_M7GB6VbYM4m8dsBEYs3I2kVnf/view">
          <span>Download CV</span>
        </Link>
      </Button>
    </div>
  );
};
