import React, {useState} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunfactItemOne = ({number, title, content, className}) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <div className={`number-wrap wow move-up ${className}`}>
                <span className="count theme-color">
                    <CountUp
                        start={focus ? 0 : null}
                        end={number}
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
                </span>
            <div className="content">
                <h6>{title}</h6>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default FunfactItemOne;
