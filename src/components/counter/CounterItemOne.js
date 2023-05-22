import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const CounterItemOne = ({iconClass, count, title}) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };

    return (
        <div className="brook-counter brook-counter-1 text-center">
            <div className="icon">
                <i className={iconClass}/>
            </div>
            <div className="content">
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
                <h6 className="heading heading-h6">{title}</h6>
            </div>
        </div>
    );
};

export default CounterItemOne;