import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { DownloadIcon } from 'lucide-react';

function Navigation() {
  return (
    <NavigationMenu className="md:pr-[5rem]">
      <NavigationMenuList>
        <NavigationMenuItem className="flex justify-end w-[100vw] p-4 items-center">
          <NavigationMenuLink href="/">Home</NavigationMenuLink>
          <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
          <NavigationMenuLink href="https://drive.google.com/file/d/1xyL-KuTwpNrZgBXe6DIDR525kG2o4xqC/view?usp=drive_link" target="_blank">
            <Tooltip key={'bottom'}>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <DownloadIcon className="w-4 h-4" /> Resume
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download Resume</p>
              </TooltipContent>
            </Tooltip>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
