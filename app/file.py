product_f = open("product_count","r")
product_f = product_f.readlines()
product={}
productl=[]
for i in product_f :
    data = i.strip().split("\t")
    product[data[0]]=data[1]
    productl.append((data[0],int(data[1])))
#
user_f = open("user_count","r")
user_f = user_f.readlines()
user={}
userl=[]
for i in user_f :
    data = i.strip().split("\t")
    user[data[0]]=data[1]
    userl.append(data[0])
#
rating_f = open("rating_count","r")
rating_f = rating_f.readlines()
rating={}
for i in rating_f :
    data = i.strip().split("\t")
    rating[int(float(data[0]))]=int(data[1])
#
def find_user(id,user) :
    ei,es=0,len(user)-1
    while ei<=es :
        m = (es+ei)//2
        if user[m]==id :
            return True
        elif user[m]<id :
            ei=m+1
        else :
            es=m-1
    return False
#
def product_top(product) :
    product.sort(key=lambda x:x[1],reverse=True)
    a = product[:20]
    ret = {}
    for i in range(len(a)) :
        ret[i]=(a[i][0],a[i][1])
    return ret
