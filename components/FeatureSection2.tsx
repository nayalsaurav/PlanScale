import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Home, Building2, Camera, PenTool } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  video: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const OurServices = ({
  badge = "planscale.in",
  heading = "Explore Services Tailored to Every Build Stage",
  description = "PlanScale India offers immersive 1:1 walkthroughs to help you visualize and perfect your project — residential, commercial, or XR-enabled.",
  tabs = [
    {
      value: "tab-residential",
      icon: <Home className="h-auto w-4 shrink-0" />,
      label: "Residential & Retail",
      content: {
        badge: "For Homeowners & Designers",
        title: "See your dream space come to life.",
        description:
          "Walk through your home, gym, café, or salon at a true-to-scale layout. Move furniture, test room sizes, and get a clear view of flow and design—before the build begins.",
        buttonText: "Explore Residential",
        video:
          "https://cdn.prod.website-files.com/604e73f890597584ceceb4e7/63158dfeb91c271cc8e82114_lsp-residential-trimmed-transcode.webm",
        imageAlt: "Residential walkthrough preview",
      },
    },
    {
      value: "tab-commercial",
      icon: <Building2 className="h-auto w-4 shrink-0" />,
      label: "Commercial & Corporate",
      content: {
        badge: "For Builders & Developers",
        title: "Collaborate at scale for commercial success.",
        description:
          "From hospitals to airports, office parks to malls—test layout, compliance, and stakeholder alignment at real-world scale. Save thousands per sqm by refining early.",
        buttonText: "View Commercial Use",
        video:
          "https://cdn.prod.website-files.com/604e73f890597584ceceb4e7/6316b4186a2fa1212182289d_lsp-commercial-v2-transcode.mp4",
        imageAlt: "Commercial walkthrough preview",
      },
    },
    {
      value: "tab-xr",
      icon: <Camera className="h-auto w-4 shrink-0" />,
      label: "XR & Lifesize Reality",
      content: {
        badge: "Virtual + Mixed Reality",
        title: "Step inside the metaverse version of your project.",
        description:
          "Augment your experience with AR/VR/MR to walk around, inspect details, and experience your design in digital 3D before any physical work begins.",
        buttonText: "Enter XR Mode",
        video:
          "https://cdn.prod.website-files.com/604e73f890597584ceceb4e7/6323d82e10e9db35368452e7_LSP_Retail_v003-transcode.mp4",
        imageAlt: "XR experience preview",
      },
    },
    {
      value: "tab-live-design",
      icon: <PenTool className="h-auto w-4 shrink-0" />,
      label: "Live Design Studio",
      content: {
        badge: "Collaborative Editing",
        title: "Design on the fly — with your client in the room.",
        description:
          "Architects and designers can plug into our system and make live updates while clients stand on the projected floor plan. Real-time design, real-time feedback.",
        buttonText: "Try Live Studio",
        video:
          "https://cdn.prod.website-files.com/604e73f890597584ceceb4e7/63157293142485c656b6d1ee_luxton-house-trimmed-transcode.mp4",
        imageAlt: "Live design collaboration",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <video
                  src={tab.content.video}
                  className="rounded-xl object-cover h-[300px] w-[300px]"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { OurServices };
