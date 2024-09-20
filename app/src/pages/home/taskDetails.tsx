import React from "react";

function TaskDetails({calendarShow}:{calendarShow : boolean}){

    return(
        <div className={`${calendarShow?"hide":""} mail-detail`}>
            <div className="mail-detail-header">
                <div className="mail-detail-profile">
                    <img src="assets/images/Screen+Shot+2020-08-01+at+12.webp" alt=""
                         className="members inbox-detail"/>
                    <div className="mail-detail-name">انیس حسینی</div>
                </div>
                <div className="mail-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round"
                         className="feather feather-trash-2 pointer">
                        <path
                            d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                    </svg>
                    <svg data-mdb-modal-init data-mdb-target="#exampleModal"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round"
                         className="feather feather-user pointer">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round"
                         className="feather feather-tag pointer">
                        <path
                            d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round"
                         className="feather feather-check-square pointer">
                        <path d="M9 11l3 3L22 4"/>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round"
                         className="feather feather-paperclip pointer">
                        <path
                            d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
                    </svg>
                </div>
            </div>
            <div className="mail-contents">
                <div className="mail-contents-subject">
                    <input type="checkbox" name="msg" id="mail20" className="mail-choice" checked/>
                    <label htmlFor="mail20"></label>
                    <div className="mail-contents-title">مقاله ای در مورد طراحی بنویسید</div>
                </div>
                <div className="mail">
                    <div className="mail-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round"
                             className="feather feather-clock">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                        ۱۴ مرداد
                    </div>
                    <div className="mail-inside">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                        با استفاده از طراحان
                        گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی
                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                        زیادی در شصت و سه
                        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                        شناخت بیشتری را برای
                        طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </div>
                    <div className="mail-assign">
                        <div className="assignee">
                            <strong>محمد</strong> ویرایشی انجام داد
                            <span className="assign-date">۱۲ تیر</span>
                        </div>
                        <div className="assignee">
                            <strong>حسین</strong> به بازاریابی اضافه شد.
                            <span className="assign-date">۱۸ دی</span>
                        </div>
                        <div className="assignee">
                            <strong>مهدیس </strong> پروژه جدیدی را ایجاد کرد
                            <span className="assign-date">۱۰ مهر</span>
                        </div>
                    </div>
                    <div className="mail-checklist">
                        <input type="checkbox" name="msg" id="mail30" className="mail-choice" checked/>
                        <label htmlFor="mail30">صبا این کار را انجام داد.</label>
                        <div className="mail-checklist-date">۱۹ مهر</div>
                    </div>
                    <div className="mail-doc">
                        <div className="mail-doc-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-file-text">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                            </svg>
                            <div className="mail-doc-detail">
                                <div className="mail-doc-name">Article.docx</div>
                                <div className="mail-doc-date">۱۴ مرداد</div>
                            </div>
                        </div>
                        <div className="mail-doc-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round"
                                 className="feather feather-trash-2">
                                <path
                                    d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round"
                                 className="feather feather-download-cloud">
                                <path d="M8 17l4 4 4-4M12 12v9"/>
                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <form action="#" className="mt-auto">
                <div className="mail-textarea">
                    <input type="text" placeholder="یک نظر بنویسید..." required/>
                    <div className="textarea-icons">
                        <input type="file" id="uploadFile" hidden/>
                        <label htmlFor="uploadFile">
                            <div className="attach pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-paperclip">
                                    <path
                                        d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
                                </svg>
                            </div>
                        </label>
                        <input type="submit" id="submitBtn" hidden/>
                        <label htmlFor="submitBtn">
                            <div className="send pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-send">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                </svg>
                            </div>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default TaskDetails;