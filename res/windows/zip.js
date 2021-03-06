/*
 * Script for zipping the contents of a directory.
 */

//Get commman line arguments
var objArgs = WScript.Arguments;
var zipPath = objArgs(0);
var sourcePath = objArgs(1);


//Create empty ZIP file and open for adding
var fso = new ActiveXObject("Scripting.FileSystemObject");
var file = fso.CreateTextFile(zipPath, true);

// Create twenty-two byte "fingerprint" for .zip
file.write("PK");
file.write(String.fromCharCode(5));
file.write(String.fromCharCode(6));
file.write('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0');
file.Close();

//Open .zip foder and copy contents of sourcePath
var objShell = new ActiveXObject("shell.application");
var zipFolder = objShell.NameSpace(zipPath);
var sourceItems = objShell.NameSpace(sourcePath).items();
if (zipFolder != null)
{
    zipFolder.CopyHere(sourceItems);
    WScript.Sleep(1000);
}
else {
	WScript.Echo("Failed to create .zip file.");
}