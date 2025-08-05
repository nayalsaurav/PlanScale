import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ScanSearch, Move3D, Users, Rotate3D } from "lucide-react";

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

const KeyFeatures = ({
  badge = "PlanScale India",
  heading = "Key Features That Set Us Apart",
  description = "Revolutionizing pre-construction visualization with immersive, collaborative, and real-time tools.",
  tabs = [
    {
      value: "feature-1",
      icon: <ScanSearch className="h-auto w-4 shrink-0" />,
      label: "1:1 Scale Projection",
      content: {
        badge: "Precision Mapping",
        title: "Experience your project at true scale.",
        description:
          "We project your entire architectural plan—including multiple floors, landscaped exteriors, and shared areas—onto a massive walkthrough floor, letting you step into your design like never before.",
        buttonText: "See How It Works",
        video:
          "https://cdn.prod.website-files.com/604e73f890597584ceceb4e7/6316ac16369f8a2ba067f090_walkthrough-v2-transcode.mp4",
        imageAlt: "Full scale projection",
      },
    },
    {
      value: "feature-2",
      icon: <Move3D className="h-auto w-4 shrink-0" />,
      label: "Real Props + Furniture",
      content: {
        badge: "Tactile Planning",
        title: "Move walls, props, and furniture freely.",
        description:
          "Test your living room or office layout by physically moving chairs, couches, and partitions. Push things around to truly feel the dimensions and optimize the flow.",
        buttonText: "Book a Demo",
        video:
          "https://cdn.prod.website-files.com/604e73f890597584ceceb4e7/6323df8dbbcc3b802f137e4a_LSP_4K_Cinematic_v003-transcode.mp4",
        imageAlt: "Props and physical furniture integration",
      },
    },
    {
      value: "feature-3",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "Multi-Stakeholder Walkthroughs",
      content: {
        badge: "Collaborative Sessions",
        title: "Design with your team & family together.",
        description:
          "Clients, architects, engineers, and family can walk through and review together. Make changes instantly based on shared feedback—everyone’s on the same (life-sized) page.",
        buttonText: "Start Collaborating",
        video:
          "https://cdn.prod.website-files.com/604e73f890597584ceceb4e7/63158d0cd595814788d0888e_live-design-trimmed-transcode.mp4",
        imageAlt: "Multiple people walking project space",
      },
    },
    {
      value: "feature-4",
      icon: <Rotate3D className="h-auto w-4 shrink-0" />,
      label: "XR Integration",
      content: {
        badge: "AR / VR / MR Ready",
        title: "Bring your walkthrough into the virtual world.",
        description:
          "After walking your space on the ground, step into extended reality. Explore elevations, facades, and interactions in VR/AR with seamless integration.",
        buttonText: "Explore XR",
        video:
          "https://cdn.prod.website-files.com/604e73f890597584ceceb4e7/63154f41e34e4120dc1d8b84_lsp-lifesize%20reality-transcode.mp4",
        imageAlt: "XR headset with walkthrough experience",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-32">
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

export { KeyFeatures };
