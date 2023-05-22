import React, {useState} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterItemThree = ({iconClass, title, count}) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };

    return (
        <div className="counter-style--2 wow move-up">
            <div className="icon">
                <i className={iconClass}/>
            </div>
            <div className="count">
                <CountUp
                    start={focus ? 0 : null}
                    end={count}
                    duration={5}
                >
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} />
                            <VisibilitySensor
                                onChange={(isVisible) =>
                                    visibleChangeHandler(isVisible)
                                }
                            >
                                <span className="sr-only">+</span>
                            </VisibilitySensor>
                        </div>
                    )}
                </CountUp>
            </div>
            <div className="content">
                <h6>{title}</h6>
            </div>
        </div>
    );
};

export default CounterItemThree;
