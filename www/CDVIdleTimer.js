var CDVIdleTimer = function() {};

CDVIdleTimer.prototype.enable = function() {
    cordova.exec(function() {
        return true;
    }, function(err) {
        return false;
    }, "CDVIdleTimer", "enable", []);
};

CDVIdleTimer.prototype.disable = function() {
    cordova.exec(function() {
        return true;
    }, function(err) {
        return false;
    }, "CDVIdleTimer", "disable", []);
};

if(!window.plugins) {
    window.plugins = {};
}

if (!window.plugins.CDVIdleTimer) {
    window.plugins.CDVIdleTimer = new CDVIdleTimer();
}

if (module.exports) {
    module.exports = CDVIdleTimer;
}
