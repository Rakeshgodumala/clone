<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!-- Set output mode as HTML -->
    <xsl:output method="html" indent="yes" />

    <!-- Template that matches the root node -->
    <xsl:template match="searchdata">
        <html>
            <head>
                <title>Search Results For <xsl:value-of select="query/search" /></title>
            </head>
            <body>
                <h1>Search results for <xsl:value-of select="query/search" /></h1>

                <!-- Results table -->
                <table border="1" cellpadding="5">
                    <tr>
                        <th>Class ID</th>
                        <th>Name</th>
                        <th>Teacher</th>
                        <th>Description</th>
                        <th>Date &amp; Time</th>
                    </tr>
                    
                    <!-- Run the template that renders the classes in table rows -->
                    <xsl:apply-templates select="results/class" />
                </table>
            </body>
        </html>
    </xsl:template>

    <!-- Template that matches class elements -->
    <xsl:template match="class">
        <tr>
            <td><xsl:value-of select="@id" /></td>
            <td><xsl:value-of select="@name" /></td>
            <td><xsl:value-of select="teacher" /></td>
            <td><xsl:value-of select="description" /></td>
            <td><xsl:value-of select="datetime" /></td>
        </tr>
    </xsl:template>

</xsl:stylesheet>
