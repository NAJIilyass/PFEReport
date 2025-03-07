# ================================================
# Release script file
# ================================================
# ------------------------------------------------
# Imported modules
# ------------------------------------------------

import shutil
import os 
from re import match
import json
import subprocess


# Define the paths
path_sources = r'.\01_CODE\source\\'
path_out = path_sources +'out\\'
path_json = path_sources +'VerM\PartNumbers.json'

# function to get Release version
def GetReleaseVersion(path):
    f = open(path)
    data = json.load(f)
    name_folder =data["lear_sw_version"]+'_'+data["__svn_revision"]+'_'+data["__release_date"]
    f.close()
    return name_folder
# function to get just SW version
def GetSWversion(path):
    f = open(path)
    data = json.load(f)
    name_folder =data["lear_sw_version"]
    f.close()
    return name_folder

# Define paths and url svn paths
path_relases = r'.\07_RELEASES\\'+ GetReleaseVersion(path_json)
path_bin = path_relases+'\\bin\\'
path_metrics = path_relases+'\\LocMetrics\\'
path_cpul = path_relases + '\\CPU_LOAD_REPORT_SW_'+GetSWversion(path_json)
url_svn_project_trunk = r'https://desktop-35eq7in:8443/svn/Test/trunk'
url_svn_project_tags  = r'https://desktop-35eq7in:8443/svn/Test/tags/[SW0]'+GetSWversion(path_json)
url_svn_project_curentrelease  = r'https://desktop-35eq7in:8443/svn/Test/trunk/07_RELEASES/'+ GetReleaseVersion(path_json)

# ------------------------------------------------
# Helper functions
# ------------------------------------------------

#function to get Metrics files
def getMetrics_files(path):
    LocMetrics_files = [x for x in os.listdir(path) if match(r'LocM[\w]', x)]
    return LocMetrics_files

#function to get Binary files
def getBin_files(path):
    Bin_files = [x for x in os.listdir(path) if match(r'STE_[\w]', x)]
    others = ['compilation_log.yaml','lint_log.yaml','defines.lnt','includes.lnt','component_list.json'] 
    for x in others :
        if (x in os.listdir(path)):
            Bin_files.append(x)
    return Bin_files
    

#function checks if directory exists
def DirExist(path):
    exist_r = os.path.exists(path)
    if not exist_r:
        os.makedirs(path)

#function prepares environment for release
def PrepareEnv():
    #create if release path does not exist
    DirExist(path_relases)
    #create if binary path does not exist
    DirExist(path_bin)
    DirExist(path_metrics)
    DirExist(path_cpul)

#function copies files from given path to target
def CopyFiles(path,target):
    for f in getBin_files(path):
        shutil.copyfile(path + '\\' + f, target + '\\' + f)

#function executes some windows command
def ExcuteCMD(cmd):
    proc = subprocess.Popen(cmd, stdin = subprocess.PIPE, stdout = subprocess.PIPE, shell=True)
    (out, err) = proc.communicate('ls')
    print out
        

#We check if release path does not exist
out_exist=os.path.exists(os.path.join(path_sources, 'out'))
if(out_exist==False):
    print(path_out+" folder doesn't exist.")
else:
    print(path_out+" folder is ready to use.")
    PrepareEnv()

    #We copy the binaries and metrics files to the corresponding folders
    CopyFiles(path_out,path_bin)
    CopyFiles(path_out,path_metrics)
    print("Setting Environment localy is done ")

    #prepare svn directories
    
    #SVN command to delete Tag 
    deletetag_cmd = 'svn delete '+url_svn_project_tags+ ' -m "Tag no longer needed" '
    #SVN command to delete release folder
    deleterelease_cmd = 'svn delete '+url_svn_project_curentrelease+ ' -m "Release no longer needed" '
    #SVN command to create Tag folder
    createtag_cmd = 'svn copy '+url_svn_project_trunk +' '+ url_svn_project_tags +' -m "Release [SW0]'+GetSWversion(path_json)
    #We commite release folder in SVN
    add_cmd = 'svn add '+path_relases
    commite_cmd = 'svn commit '+path_relases+ ' -m " commit release folder "'
    #We ran all svn commands
    ExcuteCMD(deletetag_cmd)
    ExcuteCMD(deleterelease_cmd)
    ExcuteCMD(createtag_cmd)
    print("Creation of tag")
    ExcuteCMD(add_cmd)
    ExcuteCMD(commite_cmd)
    print("commiting release folder")











    
    

