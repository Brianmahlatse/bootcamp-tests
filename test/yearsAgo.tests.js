describe('Testing yearsAgo function', function() {
    const currentYear = new Date().getFullYear();
    it('should return the correct number of years ago from the current year', () =>
      assert.equal(currentYear - 2000, yearsAgo(2000))
      );
  
    it('should return 0 when the input year is the current year', ()=>
      assert.equal(0, yearsAgo(currentYear))
    );
  

    it('should return NaN for invalid input', function() {
      assert.isNaN(yearsAgo('invalid'));
      assert.isNaN(yearsAgo(null));
      assert.isNaN(yearsAgo(undefined));
      assert.isNaN(yearsAgo(true));
    });
  });
  