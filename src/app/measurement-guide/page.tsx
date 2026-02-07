import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getImage } from '@/lib/placeholder-images';

const guideSteps = [
  {
    title: "1. Chest Measurement",
    content: "Wrap the measuring tape around the fullest part of your chest, under your armpits. Keep the tape parallel to the floor. Don't puff out your chest. It should be snug, but not tight.",
    image: getImage('measurement-guide-1'),
  },
  {
    title: "2. Sleeve Length",
    content: "With your arm relaxed at your side, measure from the tip of your shoulder, down your arm to just below your wrist bone. Keep your arm slightly bent.",
    image: getImage('measurement-guide-2'),
  },
  {
    title: "3. Waist Measurement",
    content: "Wrap the tape around your natural waistline, which is the narrowest part of your torso (usually just above the belly button). Keep one finger between the tape and your body for a comfortable fit.",
    image: getImage('measurement-guide-3'),
  },
  {
    title: "4. Inseam Measurement",
    content: "Measure from the crotch seam to the bottom of your ankle. It's best to have someone assist you with this measurement for accuracy. Wear the shoes you plan to wear with the pants.",
    image: getImage('measurement-guide-4'),
  },
   {
    title: "5. Neck Measurement",
    content: "Wrap the tape around the base of your neck, where a collar would sit. Place two fingers between the tape and your neck to ensure a comfortable collar fit.",
    image: getImage('measurement-guide-5'),
  },
];

export default function MeasurementGuidePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Perfect Fit Measurement Guide</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Follow these simple steps to get accurate measurements for your bespoke garments. All you need is a flexible measuring tape and a friend to help.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {guideSteps.map((step, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-xl font-headline hover:no-underline">
                {step.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-8 items-center p-4">
                  <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      src={step.image.imageUrl}
                      alt={step.title}
                      fill
                      className="object-cover"
                      data-ai-hint={step.image.imageHint}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

       <div className="text-center mt-16 p-8 bg-card rounded-lg">
        <h2 className="text-2xl font-headline text-foreground">Need Assistance?</h2>
        <p className="mt-2 text-muted-foreground">
          If you're unsure about any step, feel free to contact our support team or book a virtual appointment with one of our expert tailors.
        </p>
        <div className="mt-6 flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-bold">Book Appointment</button>
            <button className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md font-bold">Contact Support</button>
        </div>
      </div>
    </div>
  );
}
