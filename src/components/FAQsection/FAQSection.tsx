import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


const FAQSection = () => {
    return (
        <div className="py-16">
            <div>
            <h1 className="text-4xl font-bold text-yellow-400">FAQ</h1>
            <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1 text-white">
                Most Common Question
            </h2>
            </div>
            <div className="text-white">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is the return policy?</AccordionTrigger>
                        <AccordionContent>
                        Our return policy allows you to return products within 30 days of purchase. The items must be in their original condition and packaging.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                        <AccordionContent>
                        Yes, we offer international shipping to many countries. Shipping fees and delivery times vary depending on the destination.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How can I track my order?</AccordionTrigger>
                        <AccordionContent>
                        Once your order has been shipped, we will send you a tracking number via email. You can use this number to track your order on our website or the carrier's site.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How do I contact customer support?</AccordionTrigger>
                        <AccordionContent>
                        You can contact our customer support team via email at support@campersshop.com or call us at (123) 456-7890. Our support hours are Monday to Friday, 9 AM to 5 PM.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQSection;