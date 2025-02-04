import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const DefinesUs = () => {
  return (
    <section className="defines-us py-10">
      <div className="container-sec">
        <h5>ما يميزنا</h5>
        <div className="card-container mt-10">
          <div className="flex flex-wrap justify-between mt-5">
            <div className="mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
              <Card className="box">
                <CardHeader>
                  <CardTitle>
                    <h6> رؤية شاملة </h6>
                  </CardTitle>
                  <div className="lien-title"></div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p>
                      منصة موحدة لرؤية 360درجة لعملياتك، مُدِمجين كافة وظائف
                      إدارة موارد المؤسسة على منصة واحدة
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className=" box">
                <CardHeader>
                  <CardTitle>
                    <h6>  سرية البيانات </h6>
                  </CardTitle>
                  <div className="lien-title"></div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p>
                    يوفر  TRPطبقات متعددة من الأمان والخصوصية من خلال آليات المصادقة والترخيص للمستخدم  
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
              <Card className=" box">
                <CardHeader>
                  <CardTitle>
                    <h6>  تحليلات قوية </h6>
                  </CardTitle>
                  <div className="lien-title"></div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p>
                    تحليلات ُمعمقة ُتساعدك على فهم مسارات عملك واتخاذ قرارات استراتيجية ُمستنيرة  
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className=" box">
                <CardHeader>
                  <CardTitle>
                    <h6>   دعم مجاني وسريع </h6>
                  </CardTitle>
                  <div className="lien-title"></div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p>
                    حصل على دعم تقني مجاني من فريق مخصص للإجابة على استفساراتك ومساعدتك في حالة مواجهة أي مشاكل  
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="lg:mt-10  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
              <Card className=" box">
                <CardHeader>
                  <CardTitle>
                    <h6>  كفاءة مُحّسنة   </h6>
                  </CardTitle>
                  <div className="lien-title"></div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p>
                    تمتة المهام المُتكررة وتقليل الأخطاء، مما   ُيؤدي إلى تحسين كفاءة عملياتك وزيادة إنتاجيتك  
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className=" box">
                <CardHeader>
                  <CardTitle>
                    <h6>   فعالة من حيث التكلفة </h6>
                  </CardTitle>
                  <div className="lien-title"></div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p>
                    مزود الشركة مسؤول عن تغطية النفقات المرتبطة بتكاليف الخادم والصيانة وأي تلف في الأجهزة  
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
              <Card className=" box">
                <CardHeader>
                  <CardTitle>
                    <h6>  ميزة تنافسية  </h6>
                  </CardTitle>
                  <div className="lien-title"></div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p>
                    اكتشاف فرص جديدة لتحسين أعمالك وتعزيز قدرتك على المنافسة في السوق 
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className=" box">
                <CardHeader>
                  <CardTitle>
                    <h6>   تجربة مخصصة </h6>
                  </CardTitle>
                  <div className="lien-title"></div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <p>
                    تخصيص النظام فيما يتناسب مع احتياجاتك من خلال تنشيط التطبيقات المطلوبة فقط، وتخصيص الواجهات وتعديل قوالب الفاتورة والاقتباسات  
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefinesUs;
