var assert = require("power-assert");

var mainLogic = {
    run: function() {
        return 1;
    }
};

describe('fizz buzz test!!', function() {
    describe('最初の場合', function() {
        it ("1が出る事", function() {
            assert(mainLogic.run() === 1);
        });
    });
});
