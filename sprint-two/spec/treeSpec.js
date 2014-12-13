describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", and "removeFromParent", and properties named "value" & "parent"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains and should return false for a value that was not added', function(){
    tree.addChild(5);
    tree.addChild(2);
    tree.addChild(10);
    tree.addChild(88);
    tree.addChild(-2);
    expect(tree.contains(5)).to.equal(true);
    expect(tree.contains(2)).to.equal(true);
    expect(tree.contains(10)).to.equal(true);
    expect(tree.contains(88)).to.equal(true);
    expect(tree.contains(-2)).to.equal(true);
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(-1)).to.equal(false);
    expect(tree.contains(0)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.addChild(12);
    tree.children[0].addChild(6);
    tree.children[1].addChild(2);
    expect(tree.children[0].children[0].value).to.equal(6);
    expect(tree.children[1].children[0].value).to.equal(2);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly identify the child\'s parents', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.children[0].parent.to.equal(tree));
    expect(tree.children[1].parent.to.equal(tree));
    expect(tree.children[0].children[0].parent.to.equal(tree.children[0]));
    expect(tree.children[1].children[0].parent.to.equal(tree.children[1]));
  });

  it('should correctly remove node and all of its children from its parent node', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(9);
    tree.children[1].addChild(8);
    tree.children[1].addChild(10);
    tree.children[1].children[1].addChild(12);
    tree.children[1].children[2].addChild(13);
    tree.children[0].children[0].removeFromParent();
    expect(tree.contains(7)).to.equal(false);
    expect(tree.children[0].contains(7)).to.equal(false);
    expect(tree.children[0].children[0]).to.equal(undefined);
    tree.children[0].removeFromParent();
    expect(tree.contains(5)).to.equal(false);
    expect(tree.contains(9)).to.equal(false);
    expect(tree.children[0]).to.equal(undefined);
    expect(tree.children[0].children[1]).to.equal(undefined);
    tree.children[1].removeFromParent();
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(10)).to.equal(false);
    expect(tree.contains(12)).to.equal(false);
    expect(tree.contains(11)).to.equal(false);
    expect(tree.contains(13)).to.equal(false);
    expect(tree.children[1]).to.equal(undefined);
    expect(tree.children[1].children[1]).to.equal(undefined);
    expect(tree.children[1].children[2].children[0]).to.equal(undefined);
  });


});
