<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"></xsl:output>
    
    <xsl:template match="/"> 
     <html>
         <head>
             <title>PR.html -> Trabalho 3</title>
             <meta charset="UFT-8"/>
             
         </head>
         <body>
             <h1 align="center">Project Record</h1>
             <hr/>   
         <xsl:apply-templates/>
      
         </body>
         
     </html>
    
    </xsl:template>
    
    <xsl:template match="metadata">
        <table>
            <tr>
                <th>KEYNAME</th><td><xsl:value-of select="keyname"/></td>
                <th>BEGIN DATE</th><td><xsl:value-of select="bdate"/></td>
            </tr>
            <tr>
                <th>TITLE</th><td><xsl:value-of select="title"/></td>
                <th>END DATE</th><td><xsl:value-of select="edate"/></td>
            </tr>
            <tr>
                <th>SUBTITLE</th><td><xsl:value-of select="subtitle"/></td>
                <th>SUPERVISOR</th><td><a href="{./supervisor/@homepage}"><xsl:value-of select="supervisor"/></a></td>
            </tr>
        </table>
        <hr/>
    </xsl:template>
    
    <xsl:template match="workteam">
        <h3>Workteam</h3>
        <ol>
           <xsl:apply-templates select="member"/>
        </ol>
        <hr></hr>
    </xsl:template>
            
            <xsl:template match="member">
                <li>
                    <xsl:value-of select="identifier"/> - <xsl:value-of select="name"/> - <xsl:value-of select="email"/> - <xsl:value-of select="git"/>
                </li>
            </xsl:template>
    
    <xsl:template match="abstract">
        <h3>Abstract</h3>
        <xsl:apply-templates select="p"/>
        <hr></hr>
    </xsl:template>
             
             <xsl:template match="p">
                 <p><xsl:value-of select="text()"/></p>
             </xsl:template>
    
    <xsl:template match="deliverables">
        <h3><b>Deliverables:</b></h3>         
        <ul>             
            <xsl:apply-templates select="deliverable"/>         
        </ul>         
        <hr/>    
    </xsl:template>
                 <xsl:template match="deliverable">                 
                     <li><a href="{./@path}"><xsl:value-of select="text()"/></a></li>                   
                 </xsl:template>
                
    
</xsl:stylesheet>