// Auto-generated. Do not edit.



    //% color="#31C7D5" weight=19
    //% icon="\uf1eb"
declare namespace OSOYOO_IR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=Mbit_IR::onPressEvent
    export function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connect ir receiver to %pin" shim=Mbit_IR::init
    export function init(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
