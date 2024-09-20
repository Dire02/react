import React, {useState} from "react";
import TaskDetails from "./taskDetails";
import TasksCalendar from "./tasksCalendar";

function TaskList(){

    const [calendarShow, setCalendarShow] = useState<boolean>(false)

    // const colorInput = document.getElementById("colorpicker");
    //
    // colorInput.addEventListener("input", (e) => {
    //     document.body.style.setProperty("--button-color", e.target.value);
    // });
    //
    // $('.inbox-calendar').click(function () {
    //     $('.calendar-container').toggleClass('calendar-show');
    //     $('.inbox-container').toggleClass('hide');
    //     $('.mail-detail').toggleClass('hide');
    // });

    function inboxCalender(){
        setCalendarShow(!calendarShow);
    }

    function colorChangeHandler(e : any){
        document.body.style.setProperty("--button-color", e.target.value);
    }


    return(
        <div className="main-area">
            <div className="header">
                <div className="search-bar">
                    <input type="text" placeholder="جستجو..."/>
                </div>
                <div className="inbox-calendar" onClick={inboxCalender}>
                    <input type="checkbox" className="inbox-calendar-checkbox"/>
                    <div className="toggle-page">
                        <span>صندوق ورودی</span>
                    </div>
                    <div className="layer"></div>
                </div>
                <div className="color-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.7 464.7">
                        <path
                            d="M446.6 18.1a62 62 0 00-87.6 0L342.3 35a23 23 0 10-32.5 32.5l5.4 5.4-180.6 180.6L71.9 316c-5 5-8 11.6-8.2 18.7l-.2 3.3-2.5 56.7a9.4 9.4 0 009.4 9.8h.4l30-1.3 18.4-.8 8.3-.4a37 37 0 0024.5-10.8l240.9-240.9 4.5 4.6a23 23 0 0032.5 0c9-9 9-23.6 0-32.6l16.7-16.7a62 62 0 000-87.6zm-174 209.2l-84.6 16 138-138 34.4 34.3-87.8 87.7zM64.5 423.9C28.9 423.9 0 433 0 444.3c0 11.3 28.9 20.4 64.5 20.4s64.5-9.1 64.5-20.4C129 433 100 424 64.5 424z"/>
                    </svg>
                    <input type="color" value="#4d76fd" className="colorpicker" id="colorpicker" onChange={colorChangeHandler}></input>
                </div>
            </div>
            <div className="main-container">
                <div className={`${calendarShow?"hide" : ""} inbox-container`}>
                    <div className="inbox">
                        <div className="msg msg-department anim-y">
                            بازاریابی
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 492 492">
                                <path
                                    d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z">
                                </path>
                            </svg>
                        </div>
                        <div className="msg selected-bg anim-y">
                            <input type="checkbox" name="msg" id="mail1" className="mail-choice" checked/>
                            <label htmlFor="mail1"></label>
                            <div className="msg-content">
                                <div className="msg-title">مقاله ای در مورد طراحی بنویسید</div>
                                <div className="msg-date">۲۳ بهمن</div>
                            </div>
                            <img src="assets/images/Screen+Shot+2020-08-01+at+12.webp" alt=""
                                 className="members mail-members"/>
                        </div>
                        <div className="msg anim-y">
                            <input type="checkbox" name="msg" id="mail2" className="mail-choice"/>
                            <label htmlFor="mail2"></label>
                            <div className="msg-content">
                                <div className="msg-title">مختل کردن سطح بعدی خام زیبایی شناسی</div>
                                <div className="msg-date">۱۲ تیر</div>
                            </div>
                            <img src="assets/images/photo-1574282893982-ff1675ba4900.jpeg" alt=""
                                 className="members mail-members"/>
                        </div>
                        <div className="msg selected-bg anim-y">
                            <input type="checkbox" name="msg" id="mail3" className="mail-choice" checked/>
                            <label htmlFor="mail3"></label>
                            <div className="msg-content">
                                <div className="msg-title">لورم ایپسوم متن ساختگی با تولید سادگی</div>
                                <div className="msg-date">۳۱ خرداد</div>
                            </div>
                            <img src="assets/images/photo-1580489944761-15a19d654956.jpeg" alt=""
                                 className="members mail-members"/>
                        </div>
                        <div className="msg anim-y">
                            <input type="checkbox" name="msg" id="mail4" className="mail-choice"/>
                            <label htmlFor="mail4"></label>
                            <div className="msg-content">
                                <div className="msg-title">چاپگرها و متون بلکه روزنامه و مجله</div>
                                <div className="msg-date">۸ اردیبهشت</div>
                            </div>
                            <img src="assets/images/photo-1570612861542-284f4c12e75f.jpeg" alt=""
                                 className="members mail-members"/>
                        </div>
                        <div className="msg anim-y">
                            <input type="checkbox" name="msg" id="mail5" className="mail-choice"/>
                            <label htmlFor="mail5"></label>
                            <div className="msg-content">
                                <div className="msg-title"> تاکسیدرمی نان تست چهار دلاری</div>
                                <div className="msg-date">۱۵ آذر</div>
                            </div>
                            <img src="assets/images/photo-1438761681033-6461ffad8d80.jpeg" alt=""
                                 className="members mail-members"/>
                        </div>
                        <div className="msg anim-y">
                            <input type="checkbox" name="msg" id="mail6" className="mail-choice"/>
                            <label htmlFor="mail6"></label>
                            <div className="msg-content">
                                <div className="msg-title">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</div>
                                <div className="msg-date">۹ شهریور</div>
                            </div>
                            <img src="assets/images/photo-1541647376583-8934aaf3448a.jpeg" alt=""
                                 className="members mail-members"/>
                        </div>
                        <div className="msg anim-y">
                            <input type="checkbox" name="msg" id="mail7" className="mail-choice"/>
                            <label htmlFor="mail7"></label>
                            <div className="msg-content">
                                <div className="msg-title">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</div>
                                <div className="msg-date">۲۳ دی</div>
                            </div>
                            <img src="assets/images/Screen+Shot+2020-08-01+at+12.webp" alt=""
                                 className="members mail-members"/>
                        </div>
                        <div className="msg anim-y">
                            <input type="checkbox" name="msg" id="mail8" className="mail-choice"/>
                            <label htmlFor="mail8"></label>
                            <div className="msg-content">
                                <div className="msg-title">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</div>
                                <div className="msg-date">۱۸ تیر</div>
                            </div>
                            <img src="assets/images/photo-1570612861542-284f4c12e75f.jpeg" alt=""
                                 className="members mail-members"/>
                        </div>
                    </div>
                    <div className="add-task">
                        <button data-mdb-modal-init data-mdb-target="#exampleModal2" className="add-button">وظیفه
                            اضافه کنید
                        </button>
                    </div>
                </div>
                <TaskDetails calendarShow={calendarShow} />
                <TasksCalendar calendarShow={calendarShow}/>
            </div>
        </div>
    )
}

export default TaskList;