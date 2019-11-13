
TestCase("Testing sumOfPositiveInts", {

    "test zero": function() {
        assertEquals(0, sumOfPositiveInts(0));
    },

    "test one": function() {
        assertEquals(1, sumOfPositiveInts(1));
    },

    "test some large number": function() {
        assertEquals(55, sumOfPositiveInts(10));
    }

});