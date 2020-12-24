import io as io
import os as os
import time as time
import filetype as ft
import re as re
images_in_mdFile = ['![.*](.*)','<img ^/>']
class TodayDate:
    def __init__(self):
        self.dateString = time.strftime("%Y-%m-%d",time.localtime())
        nowDate = self.dateString.split("-")
        self.year = nowDate[0]
        self.month = nowDate[1]
        self.day = nowDate[2]
        self.yearPath  = [];
       

    def toString(self):
        return self.dateString

class PaperInfo:
    def __init__(self,info):
        self.name = info['name']
        self.conference = info['conference']
        self.published_year = info['year']
    
    def toString(self,*date):
        if len(date)==1:
            date = date[0]
            return "[**{}**](./{}{}.md) @ {} {}".format(self.name,date.month,date.day,self.conference,self.published_year)
    
    #def toString(self):
    #    return "{} @ {} {}".format(self.paper_name,self.conference,self.published_year)


##检查年份并创建年份的文件夹  
def check_year(today_date):
    path = os.path.dirname(__file__);
    docsPath = "{}/docs".format(path)
    print(docsPath)
    docsList = os.listdir(docsPath)
    print(docsList)
    if today_date.year in docsList:
        print("今天是:{}".format(today_date.toString()))
    else:
        print("新的一年又开始啦！")
        os.mkdir("{}/{}".format(docsPath,today_date.year))
        #TODO--自动创建新一年的文件夹
    today_date.yearPath =  "{}/docs/{}".format(os.path.dirname(__file__),today_date.year)

#向年份的readme.md中写入Item
def add_newpapaer_to_README(today_date,paper_info):
    newItem = "- {}:{}".format(today_date.dateString,paper_info.toString(today_date))
    readmePath = "{}/README.md".format(today_date.yearPath)
    try:
        with open(readmePath,"r+") as file:
            itemList = file.readlines();
            for line  in itemList:
                if line==newItem:#保证不会重复添加
                    print("{}.md\n中存在数据:\n{}".format(readmePath,newItem))
                    return False
            file.seek(0,2);#从末尾加入数据
            file.write("\n{}".format(newItem))
    except IOError:
        print("找不到文件:{}".format(readmePath))
        raise FileNotFoundError  
    print("成功向\n{}.md\n加入一条数据:\n{}".format(readmePath,newItem))
    return True

#复制论文目录
def copy_paper_dir(dir):
    fileList = os.listdir(dir)
    md = '^.md'
    markdown = '^.markdown'
    mdlist = re.findall(md,fileList)
    mdlist = mdlist.append(re.findall(markdown,fileList))
    if len(mdlist)>=0:
        for mdfile in mdlist:    
            1+1       
    else:
        print('找不到markdown文件')
        return False

def Parsing_MD_files(path):
     with open('{}'.format(path),'r+') as file:
        itemList =  file.readlines()
        for imgformat in images_in_mdFile:
            



    

if __name__=="__main__":
    today = TodayDate()
    check_year(today)
    info = {'name':'aa','conference':'b','year':2019}
    pi = PaperInfo(info)
    add_newpapaer_to_README(today,pi);
    kind = ft.guess('/media/s3lab-1/570c75c9-cb6f-4ce6-bcc5-9f636c7310f3/s3lab-1/workspace/paper/dailyPaper/docs/2020/1223.md')
    print(kind.extension)