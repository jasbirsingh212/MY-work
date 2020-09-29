class Node
    attr_accessor :data,:left,:right

    def initialize(data,left,right)
        @data=data
        @left=left
        @right=right
    end

    def to_s
        s=left.nil?()? ".":left.data.to_s
        s+= "<-"+data.to_s+"->"
        s+=right.nil?() ? "." :right.data.to_s
    end
end


def display(node)
    if(node.nil?())
        return
    end
    puts(node);
    display(node.left);
    display(node.right);
end
node=[];
node[0]=Node.new(50,nil,nil)
node[1]=Node.new(25,nil,nil)
node[2]=Node.new(75,nil,nil)
node[3]=Node.new(12,nil,nil)
node[4]=Node.new(37,nil,nil)
node[5]=Node.new(62,nil,nil)
node[6]=Node.new(87,nil,nil)

node[0].left=node[1];
node[0].right=node[2];
node[1].left=node[3];
node[1].right=node[4];
node[2].left=node[5];
node[2].right=node[6];

root=node[0];
display(root)