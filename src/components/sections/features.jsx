import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Feature = ({ featureData }) => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8 w-full h-screen">
        <div className="mx-auto container px-4 sm:px-8">
          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4">
              <div className="flex flex-col gap-4 max-w-full items-center md:items-start text-center md:text-left md:max-w-xl">
                <Badge
                  variant="outline"
                  className="bg-transparent! backdrop-blur-3xl!"
                >
                 System capabilities
                </Badge>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                  Architecting the <br/><span className="text-amber-500">Unseen Phases.</span>
                </h2>
                <p className="font-normal text-muted-foreground font-mono text-sm tracking-wide">
                  We don't build bloated monolithic systems. We engineer the crescent—lean, hyper-focused SaaS and web infrastructure that operates flawlessly in the shadow.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
              <div
                className="p-6 sm:p-16 rounded-2xl bg-[url('https://i.pinimg.com/1200x/85/4e/e5/854ee5b82c6b1c7c3933c56dc52563d7.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat"
              >
                <Card className="flex items-start gap-12 has-data-[slot=card-footer]:pb-6! sm:has-data-[slot=card-footer]:pb-10! pt-6 sm:py-10 border-none shadow-none ring-0 rounded-lg">
                  <CardContent className="flex flex-col gap-6 px-6 sm:px-8">
                    <Avatar className="size-12">
                      <AvatarFallback>
                        <img
                          src="https://i.pinimg.com/736x/cb/2d/67/cb2d6765f4da01849cc65e72e9fc5736.jpg"
                          className="rounded-full aspect-square object-cover"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl sm:text-2xl font-medium">
                     “Before Lunarcent Studios, our systems were collapsing under their own weight. They didn't just rebuild our platform; they engineered a flawless, scalable architecture that we never have to worry about.”
                    </h3>
                  </CardContent>
                  <CardFooter className="bg-card border-none w-full px-6 sm:px-8 py-0 flex flex-col items-start gap-0.5">
                    <p className="text-sm font-medium text-primary">
                      ALEXANDER VANCE
                    </p>
                    <span className="text-xs font-normal text-muted-foreground uppercase">
                      CTA - R.Pay
                    </span>
                  </CardFooter>
                </Card>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                {featureData?.map((value, index) => {
                  return (
                    <Card key={index} className="py-8 group bg-linear-to-t from-black via-black/50 to-transparent shadow-none backdrop-blur-3xl">
                      <CardContent className="w-full h-full px-8 flex flex-col items-start gap-12 justify-between">
                        <value.icon
                          className="w-6 h-6 text-zinc-600 group-hover:text-amber-500 transition-colors duration-500"
                          strokeWidth={1.5}
                        />
                        <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                          {value?.content}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;