#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;


void test(vector<int>& nums1, int m, vector<int>& nums2, int n){
    for(int i =0;i<n;i++){
            for(int j =0;j<m;j++){
                if(nums1[j] == 0){
                    nums1[j] = nums2[i];
                    break;
                }
            }
        }
    
    
}

int main()
{
    vector<int> nums1 = {1,2,3,0,0,0};
    int m=6;
    vector<int> nums2 = {2,5,6};
    int n=3;

    test(nums1,6,nums2,3);

    sort(nums1.begin(), nums1.end());

    for(int i =0;i<m;i++){
        cout<<nums1[i]<<" ";
    }
    
}