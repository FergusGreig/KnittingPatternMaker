#include <iostream>
using namespace std;

string rib(int nrows, int nstitch, int nknit, int npurl)
{
    int i, stitches = 0;
    string row, patch;

    while (stitches < nstitch)
    {
        for (i = 0; i < nknit; i++)
        {
            row.append("k");
            stitches++;
        }
        for (i = 0; i < npurl; i++)
        {
            row.append("p");
            stitches++;
        }
    }
    row.append("\n");
    for (i = 0; i < nrows; i++)
    {
        patch.append(row);
    }
    return patch;
}

int main()
{
    string patch = rib(8, 40, 2, 3);
    std::cout<<patch;
    return 0;
} 