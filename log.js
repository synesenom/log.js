/**
 * Logging class.
 */
const Log = {
    // Severity level of the log
    SEVERITY: {
        error: 'error',
        warning: 'warning',
        info: 'info',
        debug: 'debug'
    },
    _severity: 'info',
    _start: new Date(),

    /**
     * Adds zero padding to a number.
     *
     * @param x Number to format.
     * @param length Total length after zeroes added.
     * @returns {string} Zero padded number.
     * @private
     */
    _format: function (x, length) {
        return new Array(length - ("" + x).length + 1).join('0') + x;
    },

    /**
     * Returns elapse time in hh:mm:ss:ms format.
     *
     * @returns {string} Elapsed time in string format.
     * @private
     */
    _timer: function () {
        var ms = new Date() - this._start;
        return this._format(Math.floor(ms / 3600000), 2) + ":"
            + this._format(Math.floor((ms % 3600000) / 60000), 2) + ":"
            + this._format(Math.floor((ms % 60000) / 1000), 2)
            + "." + this._format(ms % 1000, 3);
    },

    /**
     * Sets severity level.
     *
     * @param {string} s Severity level to set.
     */
    severity: function (s) {
        if (this.SEVERITY[s]) {
            this._severity = s;
        }
    },

    /**
     * Prints a debug message on the console.
     *
     * @param tag Tag to use for the log.
     * @param message Log message.
     */
    d: function(tag, message) {
        if (this._severity === 'debug')
            console.debug('DEBUG [' + this._timer() + '] ' + tag + ': ' + message);
    },

    /**
     * Prints an info message on console.
     *
     * @param {string} tag Tag to use for the log.
     * @param {string} message Log message.
     */
    i: function (tag, message) {
        if (this._severity === 'info'
            || this._severity === 'debug')
            console.info('INFO  [' + this._timer() + '] ' + tag + ': ' + message);
    },

    /**
     * Prints a warning message to console.
     *
     * @param {string} tag Tag to use for the log.
     * @param {string} message Log message.
     */
    w: function (tag, message) {
        if (this._severity === 'warning'
            || this._severity === 'info'
            || this._severity === 'debug')
            console.warn('WARN  [' + this._timer() + '] ' + tag + ': ' + message);
    },

    /**
     * Prints an error message to console.
     *
     * @param {string} tag Tag to use for the log.
     * @param {string} message Log message.
     */
    e: function (tag, message) {
        if (this._severity === 'error'
            || this._severity === 'warning'
            || this._severity === 'info'
            || this._severity === 'debug')
            console.error('ERROR [' + this._timer() + '] ' + tag + ': ' + message);
    }
};

// Set default severity to info
Log.severity('info');