# PowerShell スクリプト内容
$jarPath = ".\jig-cli.jar"
$pattern = ".+\.domain\..+"
java -jar $jarPath --jig.pattern.domain=$pattern