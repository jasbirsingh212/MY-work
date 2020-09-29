require "algorithms"
include Containers
class Edge
    attr_accessor :nbr, :wt
    def initialize(nbr,wt)
        @nbr=nbr
        @wt=wt
    end

    def to_s
        return nbr.to_s+"-"+wt.to_s
    end
end

# ch=Edge.new(10,4);
# puts(ch);

def display(graph)
    for v in (0..graph.length-1)
        print(v.to_s+"->")
        for ei in (0..graph[v].length-1)
            
            print(graph[v][ei].to_s+", ")

        end
        puts
    end

end


class Pair
attr_accessor :v,:pth,:wt

    def initialize(v,pth,wt)
        @v=v
        @pth=pth
        @wt=wt
    end

    def to_s
    return v.to_s+"-"+pth+"-"+wt.to_s
    end
end

#visited=[false,false,false,false,false,false,false];
def djistra(graph,src)

    pq=PriorityQueue.new{|x,y| (x<=>y) ==-1}

    pq.push(Pair.new(src,src.to_s,0),0);
    hash={};
    while pq.size()>0

        temp=pq.pop();

        if (hash.key?(temp.v))
            next
        end

            hash[temp.v]=true
            puts (temp)

            for ei in (0..graph[temp.v].length-1)
                eg=graph[temp.v][ei]
                if (hash.key?(eg.nbr)==false)
                    pq.push(Pair.new(eg.nbr,temp.pth+eg.nbr.to_s,temp.wt+eg.wt),temp.wt+eg.wt)
                end
            

            end
        
    end

end






graph=[];

graph[0]=[Edge.new(1,10),Edge.new(3,40)];
graph[1]=[Edge.new(0,10),Edge.new(2,10)];
graph[2]=[Edge.new(1,10),Edge.new(3,10)];
graph[3]=[Edge.new(0,40),Edge.new(2,10),Edge.new(4,2)];
graph[4]=[Edge.new(3,2),Edge.new(5,3),Edge.new(6,8)];
graph[5]=[Edge.new(4,3),Edge.new(6,3)];
graph[6]=[Edge.new(4,8),Edge.new(5,3)];

display(graph)
djistra(graph,0)