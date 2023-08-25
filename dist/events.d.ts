export = EventEmitter;
declare function EventEmitter(): void;
declare class EventEmitter {
    _events: any;
    _eventsCount: number | undefined;
    _maxListeners: number | undefined;
    setMaxListeners(n: any): this;
    getMaxListeners(): any;
    emit(type: any, ...args: any[]): boolean;
    addListener(type: any, listener: any): any;
    on: any;
    prependListener(type: any, listener: any): any;
    once(type: any, listener: any): this;
    prependOnceListener(type: any, listener: any): this;
    removeListener(type: any, listener: any): this;
    off: any;
    removeAllListeners(type: any, ...args: any[]): this;
    listeners(type: any): any[];
    rawListeners(type: any): any[];
    listenerCount: typeof listenerCount;
    eventNames(): any;
}
declare namespace EventEmitter {
    export { EventEmitter, defaultMaxListeners, init, listenerCount, once };
}
declare function listenerCount(type: any): any;
declare var defaultMaxListeners: number;
declare function init(): void;
declare function listenerCount(emitter: any, type: any): any;
declare function once(emitter: any, name: any): Promise<any>;
