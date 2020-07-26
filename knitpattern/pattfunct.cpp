#include <iostream>
#include <string>



std::string makeSwatch(std::string rightSideRow, std::string wrongSideRow, int nrows)
{
    int rownum = 0;
    std::string swatch;
    rightSideRow.append("\n");
    wrongSideRow.append("\n");
    while (rownum < nrows){
        if (rownum % 2){
            swatch.append(wrongSideRow);
        } else {
            swatch.append(rightSideRow);
        }
    }
    return swatch;
}

std::string rib(int nrows, int nstitch, int nknit, int npurl) // alternating knits and purls to form a ribbed pattern
{
    int i, stitches = 0;
    std::string RSrow, WSrow;

    while (stitches < nstitch)
    {
        for (i = 0; i < nknit; i++)
        {
            RSrow.append("k");
            WSrow.append("p");
            stitches++;
        }
        for (i = 0; i < npurl; i++)
        {
            RSrow.append("p");
            WSrow.append("k");
            stitches++;
        }
    }
    return makeSwatch(RSrow,WSrow,nrows);
}

std::string stst (int nrows, int nstitch)
{
    int rownum = 0;
    std::string RSrow, WSrow, swatch;
    for (int i =0; i < nstitch; i++){
        RSrow.append("k");
        WSrow.append("p");
    }
    return makeSwatch(RSrow,WSrow, nrows);
}


int main()
{
    std::cout << rib(8, 40, 2, 3);
    std::cout << stst(20,35);
    return 0;
} 