
(() => {
    "use strict";

    const override = (object, property, getter) => {
        try {
            Object.defineProperty(object, property, {
                get: getter,
                configurable: true
            });
        } catch (error) {
            console.warn(
                `[N1cePrivacy] Cannot override ${property}`,
                error
            );
        }
    };

    override(document, "hidden", () => false);
    override(document, "visibilityState", () => "visible");

    try {
        document.hasFocus = () => true;
    } catch (error) {
        console.warn("[N1cePrivacy] hasFocus override failed", error);
    }

    const block = event => {
        event.stopImmediatePropagation();
    };

    const events = [
        "visibilitychange",
        "webkitvisibilitychange",
        "blur",
        "focusout",
        "pagehide",
        "freeze"
    ];

    for (const eventName of events) {
        window.addEventListener(eventName, block, true);
        document.addEventListener(eventName, block, true);
    }

    console.log("[N1cePrivacy] Active");
})();
