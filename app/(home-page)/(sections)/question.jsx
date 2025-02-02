import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const QuestionSection = () => {
  return (
    <section className="question-section py-10 px-8">
      <div className="container">
        <h5>الاسئلة الشائعة </h5>
        <div className="question-container">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>هل يمكنني الاشتراك شهريا بدلا من الاشتراك سنويا؟ </AccordionTrigger>
              <AccordionContent>
              هو برنامج متكامل لتخطيط موارد المؤسسات يساعدك على إدارة جميع جوانب عملك من خلال واجهة سهلة الاستخدام تدعم اللغة العربية، وتصدر فواتيرك، وتدير مبيعاتك، والمخزون، والعملاء، والموظفين، والحسابات، ودورة العمل  
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>هل يمكنني الاشتراك شهريا بدلا من الاشتراك سنويا؟ </AccordionTrigger>
              <AccordionContent>
              هو برنامج متكامل لتخطيط موارد المؤسسات يساعدك على إدارة جميع جوانب عملك من خلال واجهة سهلة الاستخدام تدعم اللغة العربية، وتصدر فواتيرك، وتدير مبيعاتك، والمخزون، والعملاء، والموظفين، والحسابات، ودورة العمل  
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>هل يمكنني الاشتراك شهريا بدلا من الاشتراك سنويا؟ </AccordionTrigger>
              <AccordionContent>
              هو برنامج متكامل لتخطيط موارد المؤسسات يساعدك على إدارة جميع جوانب عملك من خلال واجهة سهلة الاستخدام تدعم اللغة العربية، وتصدر فواتيرك، وتدير مبيعاتك، والمخزون، والعملاء، والموظفين، والحسابات، ودورة العمل  
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
