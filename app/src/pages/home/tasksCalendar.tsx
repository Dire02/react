import React from "react";

function TasksCalendar({calendarShow}:{calendarShow : boolean}){

    return(
        <div className={` ${calendarShow?"calendar-show":""} calendar-container`}>
            <div className="calender-tab anim-y">
                <div className="week-month">
                    <button className=" button active">هفته</button>
                    <button className=" button button-month">ماه</button>
                </div>
                <div className="month-change">
                    <div className="current-month">دی</div>
                    <div className="current-year">۱۴۰۳</div>
                </div>
                <div className="week-month">
                    <button className=" button button-weekends">آخر هفته ها</button>
                    <button className=" button button-task active">وظیفه اضافه کنید</button>
                </div>
            </div>
            <div className="calendar-wrapper anim-y">
                <div className="calendar">
                    <div className="days">دوشنبه</div>
                    <div className="days">سه شنبه</div>
                    <div className="days">چهارشنبه</div>
                    <div className="days">پنج شنبه</div>
                    <div className="days">جمعه</div>
                    <div className="days">شنبه</div>
                    <div className="days">یکشنبه</div>
                    <div className="day not-work">۳۱</div>
                    <div className="day project-market">‍۱
                        <div className="hover-title">بازاریابی</div>
                        <div className="project-detail">گزارش فروش ماه گذشته</div>
                        <div className="project-detail">پیشنهادات را برای مشتریان آماده کنید</div>
                        <div className="popup-check">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-check-square">
                                <path d="M9 11l3 3L22 4"/>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                            </svg>
                        </div>
                    </div>
                    <div className="day">۲</div>
                    <div className="day project-design">۳
                        <div className="project-detail design"> تصویر برای پست وبلاگ در مورد روند طراحی
                            ایجاد کنید</div>
                    </div>
                    <div className="day">۴</div>
                    <div className="day">۵</div>
                    <div className="day">۶</div>
                    <div className="day project-develop">۷
                        <div className="project-detail develop">در دوره آموزشی درباره روندهای طراحی آینده و
                            فناوری های جدید شرکت
                            کنید</div>
                    </div>
                    <div className="day">۸</div>
                    <div className="day">۹</div>
                    <div className="day">۱۰</div>
                    <div className="day">۱۱</div>
                    <div className="day">۱۲</div>
                    <div className="day">۱۳</div>
                    <div className="day">۱۵</div>
                    <div className="day project-market">۱۵
                        <div className="hover-title">بازاریابی</div>
                        <div className="project-detail">مقاله ای در مورد طراحی بنویسید</div>
                        <div className="popup-check">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-check-square">
                                <path d="M9 11l3 3L22 4"/>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                            </svg>
                        </div>
                    </div>
                    <div className="day">۱۶</div>
                    <div className="day project-market">۱۷
                        <div className="hover-title">بازاریابی</div>
                        <div className="project-detail">لورم ایپسوم متن ساختگی با تولید سادگی</div>
                        <div className="project-detail">پایان خبرنامه به مشتریانS</div>
                        <div className="popup-check">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-check-square">
                                <path d="M9 11l3 3L22 4"/>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                            </svg>
                        </div>
                    </div>
                    <div className="day">۱۸</div>
                    <div className="day">۱۹</div>
                    <div className="day">۲۰</div>
                    <div className="day">۲۱</div>
                    <div className="day">۲۲</div>
                    <div className="day project-finance">۲۳
                        <div className="hover-title">مدیریت</div>
                        <div className="project-detail finance">طراحی مجدد رابط کاربری پروژه برای مشتریان و
                            دریافت بازخورد
                        </div>
                        <div className="popup-check">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-check-square">
                                <path d="M9 11l3 3L22 4"/>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                            </svg>
                        </div>
                    </div>
                    <div className="day">۲۴</div>
                    <div className="day">۲۵</div>
                    <div className="day">۲۶</div>
                    <div className="day">۲۷</div>
                    <div className="day">۲۸</div>
                    <div className="day">۲۹</div>
                    <div className="day">۳۰</div>
                    <div className="day not-work">۱</div>
                    <div className="day not-work">۲</div>
                    <div className="day not-work">۳</div>
                    <div className="day not-work">۴</div>
                </div>
            </div>
        </div>

    )
}

export default TasksCalendar;